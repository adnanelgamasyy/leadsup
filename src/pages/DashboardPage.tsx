"use client";

import { useEffect, useState } from 'react';
import {
  getContentSections,
  addContentSection,
  updateContentSection,
  deleteContentSection,
  ContentSection,
} from '@/lib/storage';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';
import { Plus, Pencil, Trash2, Eye, EyeOff, GripVertical } from 'lucide-react';
import { toast } from 'sonner';
import { Toaster } from '@/components/ui/sonner';

export default function DashboardPage() {
  const [sections, setSections] = useState<ContentSection[]>([]);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [editingSection, setEditingSection] = useState<ContentSection | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    subtitle: '',
    description: '',
    image: '',
    order: 0,
    visible: true,
  });

  const loadSections = () => {
    const content = getContentSections();
    setSections(content.sort((a, b) => a.order - b.order));
  };

  useEffect(() => {
    loadSections();
  }, []);

  const resetForm = () => {
    setFormData({
      title: '',
      subtitle: '',
      description: '',
      image: '',
      order: sections.length + 1,
      visible: true,
    });
    setEditingSection(null);
  };

  const handleAdd = () => {
    if (!formData.title || !formData.subtitle || !formData.description) {
      toast.error('Please fill in all required fields');
      return;
    }

    try {
      addContentSection(formData);
      loadSections();
      setIsAddDialogOpen(false);
      resetForm();
      toast.success('Section added successfully');
    } catch (error) {
      toast.error('Failed to add section');
    }
  };

  const handleEdit = (section: ContentSection) => {
    setEditingSection(section);
    setFormData({
      title: section.title,
      subtitle: section.subtitle,
      description: section.description,
      image: section.image,
      order: section.order,
      visible: section.visible,
    });
  };

  const handleUpdate = () => {
    if (!editingSection) return;

    try {
      updateContentSection(editingSection.id, formData);
      loadSections();
      setEditingSection(null);
      resetForm();
      toast.success('Section updated successfully');
    } catch (error) {
      toast.error('Failed to update section');
    }
  };

  const handleDelete = (id: string) => {
    try {
      deleteContentSection(id);
      loadSections();
      toast.success('Section deleted successfully');
    } catch (error) {
      toast.error('Failed to delete section');
    }
  };

  const toggleVisibility = (section: ContentSection) => {
    try {
      updateContentSection(section.id, { visible: !section.visible });
      loadSections();
      toast.success(`Section ${section.visible ? 'hidden' : 'visible'}`);
    } catch (error) {
      toast.error('Failed to update visibility');
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Toaster />
      
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-4xl font-bold">Content Dashboard</h1>
          <p className="text-muted-foreground mt-2">
            Manage your website content sections
          </p>
        </div>

        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button onClick={resetForm}>
              <Plus className="w-4 h-4 mr-2" />
              Add Section
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Add New Section</DialogTitle>
              <DialogDescription>
                Create a new content section for your website.
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="title">Title *</Label>
                <Input
                  id="title"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  placeholder="Enter title"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="subtitle">Subtitle *</Label>
                <Input
                  id="subtitle"
                  value={formData.subtitle}
                  onChange={(e) => setFormData({ ...formData, subtitle: e.target.value })}
                  placeholder="Enter subtitle"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description *</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Enter description"
                  rows={4}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="image">Image URL</Label>
                <Input
                  id="image"
                  value={formData.image}
                  onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                  placeholder="https://images.unsplash.com/..."
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="order">Order</Label>
                  <Input
                    id="order"
                    type="number"
                    value={formData.order}
                    onChange={(e) => setFormData({ ...formData, order: parseInt(e.target.value) || 0 })}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="visible">Visible</Label>
                  <div className="flex items-center h-10">
                    <Switch
                      id="visible"
                      checked={formData.visible}
                      onCheckedChange={(checked) => setFormData({ ...formData, visible: checked })}
                    />
                  </div>
                </div>
              </div>
            </div>

            <DialogFooter>
              <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>
                Cancel
              </Button>
              <Button onClick={handleAdd}>Add Section</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {sections.length === 0 ? (
        <Card>
          <CardContent className="flex flex-col items-center justify-center py-16">
            <p className="text-muted-foreground mb-4">No content sections yet</p>
            <Button onClick={() => setIsAddDialogOpen(true)}>
              <Plus className="w-4 h-4 mr-2" />
              Create your first section
            </Button>
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-4">
          {sections.map((section) => (
            <Card key={section.id}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-3 flex-1">
                    <GripVertical className="w-5 h-5 text-muted-foreground mt-1" />
                    <div className="flex-1">
                      <CardTitle className="flex items-center gap-2">
                        {section.title}
                        {!section.visible && (
                          <EyeOff className="w-4 h-4 text-muted-foreground" />
                        )}
                      </CardTitle>
                      <CardDescription>{section.subtitle}</CardDescription>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => toggleVisibility(section)}
                    >
                      {section.visible ? (
                        <Eye className="w-4 h-4" />
                      ) : (
                        <EyeOff className="w-4 h-4" />
                      )}
                    </Button>

                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handleEdit(section)}
                        >
                          <Pencil className="w-4 h-4" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl">
                        <DialogHeader>
                          <DialogTitle>Edit Section</DialogTitle>
                          <DialogDescription>
                            Update the content section details.
                          </DialogDescription>
                        </DialogHeader>

                        <div className="space-y-4 py-4">
                          <div className="space-y-2">
                            <Label htmlFor="edit-title">Title *</Label>
                            <Input
                              id="edit-title"
                              value={formData.title}
                              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                            />
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="edit-subtitle">Subtitle *</Label>
                            <Input
                              id="edit-subtitle"
                              value={formData.subtitle}
                              onChange={(e) => setFormData({ ...formData, subtitle: e.target.value })}
                            />
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="edit-description">Description *</Label>
                            <Textarea
                              id="edit-description"
                              value={formData.description}
                              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                              rows={4}
                            />
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="edit-image">Image URL</Label>
                            <Input
                              id="edit-image"
                              value={formData.image}
                              onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                            />
                          </div>

                          <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="edit-order">Order</Label>
                              <Input
                                id="edit-order"
                                type="number"
                                value={formData.order}
                                onChange={(e) => setFormData({ ...formData, order: parseInt(e.target.value) || 0 })}
                              />
                            </div>

                            <div className="space-y-2">
                              <Label htmlFor="edit-visible">Visible</Label>
                              <div className="flex items-center h-10">
                                <Switch
                                  id="edit-visible"
                                  checked={formData.visible}
                                  onCheckedChange={(checked) => setFormData({ ...formData, visible: checked })}
                                />
                              </div>
                            </div>
                          </div>
                        </div>

                        <DialogFooter>
                          <Button variant="outline" onClick={() => setEditingSection(null)}>
                            Cancel
                          </Button>
                          <Button onClick={handleUpdate}>Update Section</Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>

                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>Delete Section</AlertDialogTitle>
                          <AlertDialogDescription>
                            Are you sure you want to delete "{section.title}"? This action cannot be undone.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancel</AlertDialogCancel>
                          <AlertDialogAction onClick={() => handleDelete(section.id)}>
                            Delete
                          </AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4">
                  {section.image && (
                    <img
                      src={section.image}
                      alt={section.title}
                      className="w-32 h-32 object-cover rounded"
                    />
                  )}
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground">{section.description}</p>
                    <div className="flex gap-2 mt-2">
                      <span className="text-xs bg-secondary px-2 py-1 rounded">Order: {section.order}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}